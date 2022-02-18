
export default function BoxIcon({children, className, size}){
    return(
        <div className={`flex items-center justify-center bg-icon-${className} b-icon-${size}`}>
            {children}
        </div>
    )
}