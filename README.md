<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# NestJS Microservices App for Customer Orders using RabbitMq

This repository contains a microservices-based application for handling customer orders, including services for order processing, billing, and authentication. Built with NestJS and leveraging RabbitMQ for inter-service communication, the architecture ensures scalable, efficient, and decoupled operations. This README provides an overview of the system, instructions for setting it up, and guidelines for contributing.

## Architecture Overview

The application is divided into three main services:

- **Order Service**: Manages customer orders, product listings, and order status updates.
- **Billing Service**: Responsible for generating bills for orders placed through the Order Service.
- **Authentication Service**: Handles user authentication and authorizes operations across services.

Communication among services is facilitated by RabbitMQ, ensuring reliable and asynchronous message passing.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker and Docker Compose
- Node.js (version 14 or later)
- NestJS CLI

## Setup and Installation

1. **Clone the Repository**
```bash
git clone https://github.com/Gm-shuvo/nest_microservice.git

cd nest_microservice
```
2. **Start RabbitMQ and Services with Docker Compose**

```bash
docker-compose up --build
```
This command builds and starts the services defined in `docker-compose.yml`, including RabbitMQ.

3. **Accessing the Services**
- The services are accessible on the following ports:
  - Order Service: http://localhost:3000
  - Billing Service: http://localhost:3001
  - Authentication Service: http://localhost:3002
- RabbitMQ Management Interface: http://localhost:15672 (default credentials: `guest`/`guest`)

## Usage

Provide examples of how to use your app here. For instance:
```bash
# Place an order
curl -X POST http://localhost:3000/orders -d '{"name": "IPhone 14 pro", "quantity": "2", "price": 99999}' -H "Content-Type: application/json"
```
# Development
Running Services Locally
To run individual services for development purposes, navigate to the service directory and run:
```bash
nest start --watch
```
## Running Tests
Explain how to run the automated tests for this system.
```bash
npm run test
```
## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](https://github.com/<your-username>/<repository-name>/blob/main/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests to us.

## License

This project is licensed under the [MIT License](https://github.com/Gm-shuvo/nest_microservice/blob/main/LICENSE).

## Acknowledgments

- NestJS Community
- RabbitMQ

