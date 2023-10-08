import { ContactItem } from "components/ContactItem/ContactItem";


export const ContactsList = ({ items, onClickDel }) => {

    const onClick = evt => {
        let keyId = evt.target.name;
        onClickDel(keyId);
    }

    return (     
        <ul>
            {items.map(item => (
                <ContactItem
                    key={item.id}
                    item={item}
                    onClickDel={onClickDel}
                />
            ))}
        </ul>
    )
};