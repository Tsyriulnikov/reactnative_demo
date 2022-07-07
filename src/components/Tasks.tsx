import React from "react";
import {Box, Center, Checkbox, Heading, HStack, Icon, IconButton, Input, View, VStack, Text} from "native-base";
import {Feather, Entypo} from "@expo/vector-icons";

type TasksPropType = {
    id: string
    title: string
}
export const Tasks = (props: TasksPropType) => {

    // const instState = [{
    //         title: "Code",
    //         isCompleted: true
    //     }, {
    //         title: "Meeting with team at 9",
    //         isCompleted: false
    //     }, {
    //         title: "Check Emails",
    //         isCompleted: false
    //     }, {
    //         title: "Write an article",
    //         isCompleted: false
    //     }];
    //     const [list, setList] = React.useState(instState);
    //     const [inputValue, setInputValue] = React.useState("");
    //     const toast = useToast();
    //
    //     const addItem = title => {
    //         if (title === "") {
    //             toast.show({
    //                 title: "Please Enter Text",
    //                 status: "warning"
    //             });
    //             return;
    //         }
    //
    //         setList(prevList => {
    //             return [...prevList, {
    //                 title: title,
    //                 isCompleted: false
    //             }];
    //         });
    //     };
    //
    //     const handleDelete = index => {
    //         setList(prevList => {
    //             const temp = prevList.filter((_, itemI) => itemI !== index);
    //             return temp;
    //         });
    //     };
    //
    //     const handleStatusChange = index => {
    //         setList(prevList => {
    //             const newList = [...prevList];
    //             newList[index].isCompleted = !newList[index].isCompleted;
    //             return newList;
    //         });
    //     };

    return (
        <Center w="100%">
            <Box maxW="300" w="100%" >


                <VStack space={2}>

                    <HStack w="100%" justifyContent="space-between" alignItems="center" key={props.id} padding={2}>
                        {/*<Checkbox isChecked={true} value={props.title}></Checkbox>*/}
                        <Text width="100%" flexShrink={1} textAlign="left" mx="2">
                            {props.title}
                        </Text>

                    </HStack>
                </VStack>

            </Box>
        </Center>


    )
};