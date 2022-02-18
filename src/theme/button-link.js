import React from "react"
import Link from "next/link"

const AlinkButton = React.forwardRef(({ onClick, href, children, className }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref} className={className}>
        {children}
      </a>
    )
  })
  
  function ButtonLink({children,href, className}) {
    return (
      <Link href={`${href}`} passHref>
        <AlinkButton className={`btn btn-${className}`}>{children}</AlinkButton>
      </Link>
    )
  }
  
  export default ButtonLink
  