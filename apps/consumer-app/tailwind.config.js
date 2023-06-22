
const withReactwiind = require("eslint-config-rw/config");
 
const theme = {
    theme: {
        colors: {
            primary:{
              light: "#172941",
              DEFAULT:"#081D3B",  
              dark: "#0E1927",
            },
            secondary: {
              light: "#3171DE",
              DEFAULT:"#3072E0",
              dark: "#2458AC",
            },
        }
    } 
  }

module.exports  = withReactwiind(theme);
