import { StyledItem, StyledBtm, StyledText } from "./ContactItem.styled";


export const ContactItem = ({item, onClickDel }) => {

    const onClick = evt => {
        let keyId = evt.target.name;
        onClickDel(keyId);
    }

    return (
        <StyledItem >
            <StyledText>{item.name}: {item.number}</StyledText>
            <StyledBtm type="button" name={item.id} onClick={onClick}>delete</StyledBtm>
        </StyledItem>
    )
}