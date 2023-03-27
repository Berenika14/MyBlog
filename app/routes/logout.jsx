import {logout} from "../utils/session.server"

// export async function action({ request }) {
//   return logout(request);
// }

export async function loader(args) {
  return logout(args.request);
}