"use client"
import { HTMLProps, useState } from "react"

interface InputProps extends HTMLProps<HTMLInputElement> {
    icon?: React.ReactNode
}

export default function Input(props: InputProps) {
    const [value, setValue] = useState('')
    const [isFocused, setFocus] = useState(false)

    function handleFocus() {
        setFocus(true)
    }

    function handleBlur() {
        setFocus(false)
    }

    function handleChange(value: any) {
        setValue(value)
    }

    return (
        <div className={`flex flex-1 bg-gray-50 border rounded p-1.5 ${isFocused ? "border-blue-300 border-2" : "border-gray-300"}`}>
            <input
                className="bg-transparent focus:outline-none grow"
                id={props.id}
                type="text"
                value={value}
                placeholder={props.placeholder}
                onFocus={() => handleFocus()}
                onBlur={() => handleBlur()}
                onChange={
                    (event) => handleChange(event.target.value)
                }
                {...props}
            />
            {props.icon}
        </div>
    )
}