import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';

const express = require('express');

const binaryMimeTypes: string[] = [];

let cachedServer: Server;

// Create the Nest.js server and convert it into an Express.js server
async function bootstrapServer(): Promise<Server> {
	if (!cachedServer) {
		const expressApp = express();
		const nestApp = await NestFactory.create(
			AppModule,
			new ExpressAdapter(expressApp)
		);
		nestApp.use(eventContext());
		await nestApp.init();
		cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
	}
	return cachedServer;
}

// Export the handler : the entry point of the Lambda function
export const main: Handler = async (event: any, context: Context) => {
	cachedServer = await bootstrapServer();
	return proxy(cachedServer, event, context, 'PROMISE').promise;
};
