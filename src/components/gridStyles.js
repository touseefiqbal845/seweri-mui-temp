export const getGridStyles = ({ marginTop = 4, marginBottom = 8, padding = 0} = {}) => ({
  display: "flex",
  marginLeft: {
    xl: 14,
    lg: 10,
    md: 8,
    sm: 4,
    xs: 2,
  },
  marginRight: {
    xl: 14,
    lg: 10,
    md: 8,
    sm: 4,
    xs: 2,
  },
  marginTop: marginTop, 
  marginBottom: marginBottom, 
  padding: {
    xl: padding,
    lg: padding,
    md: padding,
    sm: padding,
    xs: padding,
  },
});
