// Winston adalah library yang dapat digunakan untuk membuat logging
import winston from "winston";

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

// mencetak log info dengan mode debug dengan format hasil adalah json
logger.info("Hello World");
