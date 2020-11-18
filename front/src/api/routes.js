const apiPath = process.env.VUE_APP_API_HOSTNAME

// Toolbar API
const schematicsBasePath = apiPath + "/schematics"
export const SCHEMATICS = {
  GET: schematicsBasePath,
}
