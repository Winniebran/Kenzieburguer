import { StyledInput } from "./StyledInputSearch"

export const InputSearch = ({input, setInput}) => {
    
    return (
       <StyledInput
       type="search"
       placeholder="Digitar Pesquisa"
       value = {input}
       onChange = {(e) => setInput(e.target.value)}
       />
    )
}