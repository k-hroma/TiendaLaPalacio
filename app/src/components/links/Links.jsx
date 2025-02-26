const Links = (url, text, children, newTag=false) => { 
  return (
  <>
    <a target={ newTag && "_blank" } href={url} rel={newTag && "noopener noreferrer"}>{text}</a>
    <span>{children}</span>
  </>
  )
}

export { Links }