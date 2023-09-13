import * as React from "react"
const EmailSvgS = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 33 33"
            {...props}
        >
            <path
                d="M5 5c-.704 0-1.32.363-1.676.91L14.293 16.88a.976.976 0 0 0 1.414 0L26.676 5.91A1.994 1.994 0 0 0 25 5H5zM3 8.414V23c0 1.108.892 2 2 2h20c1.108 0 2-.892 2-2V8.414l-9.879 9.879a3.015 3.015 0 0 1-4.242 0L3 8.414z"
                style={{
                    opacity: 1,
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.49999997,
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                }}
            />
        </svg>
    )
}
export default EmailSvgS
