
const Links = ({ className, url, text, children, newTag = false }) => { 
  return (
  <>
      <a className={className} target={ newTag && "_blank" } href={url} rel={newTag && "noopener noreferrer"}>{text}</a>
      <span>{children}</span>
  </>
  )
}

export { Links }