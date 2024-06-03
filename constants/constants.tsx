export const NAVIGATION_LINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Create Blogs",
    link: "/create-blogs",
  },
  {
    name: "Sign Up",
    link: "/sign-up",
  },
  {
    name: "Log in",
    link: "/login",
  },
];

interface InputErrorMessages {
  [key: string]: string;
}
export const INPUT_ERROR_MESSAGES: InputErrorMessages = {
  name: "Please enter valid name",
  email: "Please enter valid email",
  password: "Please enter valid password",
  title: "Please enter title",
  date: "Please enter date",
  content: "Please enter content",
  author: "Please enter author",
};

export const INPUT_VALIDATION_REGEX = {
  numeric: /^([0-9]+)$/,
  alphaNumeric: /^[a-zA-Z0-9]*$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  domain: /^(?!-)[@]?[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/,
};
