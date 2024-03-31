export const PAGE_ROUTES = {
  HOME: "/",
  COMPONENTS: "/components",

  ADMIN: {
    POST_LIST: "/admin/posts",
    POST_CREATE: "/admin/posts/create",
    POST_EDIT: "/admin/posts/:id",

    CATEGORY_LIST: "/admin/categories",
  },
} as const
