import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Цей рядок робить головну сторінку доступною без пароля.
  // Якщо хочете закрити все — приберіть publicRoutes.
  publicRoutes: ["/"],
});

export const config = {
  // Цей matcher каже Clerk ігнорувати статичні файли (картинки, шрифти),
  // що прибирає помилку #crypto
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};