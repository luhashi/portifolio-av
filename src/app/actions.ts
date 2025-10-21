"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Erro de validação. Por favor, verifique os campos.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  // Here you would integrate with an email service like Resend or Formspree
  // For now, we'll just log the data to the console
  console.log("Form submission received:");
  console.log({ name, email, message });

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real application, you would check the response from your email service
  const emailSentSuccessfully = true;

  if (emailSentSuccessfully) {
    return {
      message: "Obrigado pelo seu contato! Responderei em breve.",
      success: true,
    };
  } else {
    return {
      message: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
      success: false,
    };
  }
}
