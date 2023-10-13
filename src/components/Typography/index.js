export const Title1 = ({ label = "", color, ...props }) => {
    return (
        <h2 style={{ color: color }} {...props}>{label}</h2>
    )
}