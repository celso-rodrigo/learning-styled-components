import { useState } from "react"
import { ColoredTitle } from "../Styles/TittleStyles"
import { Input } from "../Styles/InputStyles"

function TextColor() {
  const [text, setText] = useState('Pink')
  
  return (
    <div>
      {/* Dynamic props */}
      <ColoredTitle $color={text.toLowerCase()}>{text}</ColoredTitle>

      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pick a color"
      />
    </div>
  )
}

export default TextColor