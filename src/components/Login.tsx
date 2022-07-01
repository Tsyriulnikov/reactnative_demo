import React from "react";
import {Button, Box, Center, FormControl, Heading, HStack, Input, Link, VStack, Text, Checkbox} from "native-base";
import {useForm, Controller} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginTC} from "../store/login-reducer";
export type FormData = {
    email: string
    password: string
    rememberMe:boolean
    captcha?: string
};
export const Login = () => {

    const dispatch=useDispatch()

    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: true,
            captcha:''
        }
    });
    const onSubmit = (data: FormData) =>{
        console.log(data)
                    dispatch(loginTC(data) as any)
         }
    ;
    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Welcome
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign in to continue!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email ID</FormControl.Label>

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input onBlur={onBlur}
                                       onChangeText={onChange}
                                       value={value}
                                       autoCorrect={false}
                                       autoCapitalize={'none'}
                                />
                            )}
                            name="email"
                        />
                        {errors.email && <Text style={{color: 'red'}}>This is required.</Text>}
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Controller
                            control={control}
                            rules={{
                                maxLength: 100,
                                required: true,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input type="password" onBlur={onBlur}
                                       onChangeText={onChange}
                                       value={value} autoCorrect={false}
                                       autoCapitalize={'none'}/>
                            )}
                            name="password"
                        />
                        {errors.password && <Text style={{color: 'red'}}>This is required.</Text>}
                        <FormControl>
                            <Controller
                                control={control}
                                name="rememberMe"
                                render={({
                                             field: {onChange, onBlur, value, name, ref},
                                             fieldState: {invalid, isTouched, isDirty, error},
                                             formState,
                                         }) => (
                                    <HStack space={6}>
                                        <Checkbox shadow={2} value={'true'} onChange={onChange}
                                                  accessibilityLabel="Remember me" defaultIsChecked>
                                            Remember me
                                        </Checkbox>
                                    </HStack>
                                )}
                            />
                        </FormControl>
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" title="Submit" onPress={handleSubmit(onSubmit)}>
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            I'm a new user.{" "}
                        </Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} href="#">
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    )
};