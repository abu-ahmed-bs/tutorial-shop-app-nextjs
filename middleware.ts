// middleware.ts
import { stackMiddlewares } from "middlewares/stackMiddlewares";
import { withLocalization } from "middlewares/withLocalization";


const middlewares = [withLocalization];
export default stackMiddlewares(middlewares);

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
