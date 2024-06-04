import { password } from "bun";
import { z } from "zod";

const loginValidation = z.object({
  username: z.string().min(1).max(50).email(),
  password: z.string(),
});

const request: object = {
  username: "angger@gmail.com",
  password: "angger",
};

// cek apakah validati cocok dengan request
console.log(loginValidation.parse(request));
// jika error maka akan mereturn pesan zod error
// jika tidak error maka akan mereturn hasil value yang akan divalidasi
