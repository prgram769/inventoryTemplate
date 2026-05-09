"use client"

import { Input } from "./ui/Input";
import { ubuntu } from "./fonts";
import { Label } from "./ui/Label";
import { Button } from "./ui/Button";
import { actions } from "@/actions";
import { useActionState } from "react";
import { FormError } from "./ui/FormError";
import { Select } from "./ui/Select";
import { Option } from "./ui/Option";

export type FormStateSignUp = {
  fields: {
    name: string,
    username: string,
    email: string,
    password: string
  },
  success: boolean,
  message: string,
  error: {
    name?: string[],
    username?: string[],
    email?: string[],
    password?: string[]
  } | null
}

export const INITIAL_STATE: FormStateSignUp = {
  fields: {
    name: "",
    username: "",
    email: "",
    password: ""
  },
  success: false,
  message: "",
  error: null
}

function SignUp() {
  const [formState, formAction] = useActionState(actions.auth.signUp, INITIAL_STATE);

  const styles = {
    divContainer: `${ubuntu.className} px-4 py-4 bg-amber-100 w-fit h-fit md:w-fit md:h-fit flex flex-col justify-center items-center rounded-3xl border-4 border-red-300 relative`,
    title: "text-2xl md:text-3xl font-bold m-3 text-center",
    span: "flex justify-center font-bold",
    internalDivs: "flex justify-center items-center mr-2 ml-2 md:m-0",
    input: "w-full border-2 border px-3 py-3 m-2 rounded-2xl",
    button: "rounded-2xl border-2 bg-orange-300 w-full m-2 px-2 py-2 font-bold"
  }

  return (
    <>
      <h1 className={styles.title}>Create your inventory account</h1>
      <div className={styles.divContainer}>
        <form action={formAction}>
          <span className={styles.span}>
            <Label htmlFor="nameInput" children="Name" />
          </span>
          <div className={styles.internalDivs}>
            <svg xmlns="http://www.w3.org/2000/svg" height="59px" viewBox="0 -960 960 960" width="48px" fill="#222"><path d="M480-242q-67 0-129 23.5T235-149v9h490v-9q-54-46-116-69.5T480-242Zm139.5-35.5Q685-253 740-211v-609H220v609q55-42 120.5-66.5T480-302q74 0 139.5 24.5ZM427-464q-23-23-23-55t23-55q23-23 55-23t55 23q23 23 23 55t-23 55q-23 23-55 23t-55-23ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm360-341q40-40 40-98t-40-98q-40-40-98-40t-98 40q-40 40-40 98t40 98q40 40 98 40t98-40Zm-100-98Z" /></svg>
            <Input id="nameInput" name="name" defaultValue={formState.fields?.name ?? ''} type="text" className={styles.input} placeholder="Insert your name" />
          </div>
          <FormError error={formState.error?.name} />
          <span className={styles.span}>
            <Label htmlFor="usernameInput" children="Username" />
          </span>
          <div className={styles.internalDivs}>
            <svg xmlns="http://www.w3.org/2000/svg" height="59px" viewBox="0 -960 960 960" width="48px" fill="#222"><path d="M372-523q-42-42-42-108t42-108q42-42 108-42t108 42q42 42 42 108t-42 108q-42 42-108 42t-108-42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm324.5-346.5Q570-592 570-631t-25.5-64.5Q519-721 480-721t-64.5 25.5Q390-670 390-631t25.5 64.5Q441-541 480-541t64.5-25.5ZM480-631Zm0 411Z" /></svg>
            <Input id="usernameInput" name="username" defaultValue={formState.fields?.username ?? ''} type="text" className={styles.input} placeholder="Insert a username:" />
          </div>
          <FormError error={formState.error?.username} />
          <span className={styles.span}>
            <Label htmlFor="emailInput" children="Email" />
          </span>
          <div className={styles.internalDivs}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#222"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>
            <Input id="emailInput" name="email" defaultValue={formState.fields?.email ?? ''} type="email" className={styles.input} placeholder="Insert your email:" />
          </div>
          <FormError error={formState.error?.email}/>
          <span className={styles.span}>
            <Label htmlFor="passwordInput" children="Password" />
          </span>
          <div className={styles.internalDivs}>
            <svg xmlns="http://www.w3.org/2000/svg" height="59px" viewBox="0 -960 960 960" width="48px" fill="#222"><path d="M80-200v-61h800v61H80Zm38-254-40-22 40-68H40v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 22-38-67-38 67Zm324 0-40-24 40-68h-78v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 24-38-67-38 67Zm324 0-40-24 40-68h-78v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 24-38-67-38 67Z" /></svg>
            <Input id="passwordInput" name="password" defaultValue={formState.fields?.password ?? ''} type="password" className={styles.input} placeholder="Insert a password:" />
          </div>
            <FormError error={formState.error?.password} />
          <span className={styles.span}>
            <Label htmlFor="roleInput" children="Role"/>
          </span>
          <div className={styles.internalDivs}>
            <svg xmlns="http://www.w3.org/2000/svg" height="59px" viewBox="0 -960 960 960" width="48px" fill="#222"><path d="M312-240q-51 0-97.5-18T131-311q-48-45-69.5-106.5T40-545q0-78 38-126.5T189-720q14 0 26.5 2.5T241-710l239 89 239-89q13-5 25.5-7.5T771-720q73 0 111 48.5T920-545q0 66-21.5 127.5T829-311q-37 35-83.5 53T648-240q-66 0-112-30l-46-30h-20l-46 30q-46 30-112 30Zm0-60q40 0 73.5-17t62.5-43h64q29 26 62.5 43t73.5 17q39 0 76.5-14.5T791-357q36-37 52.5-87T860-545q0-49-21.5-82T769-660q-9 0-29 6l-260 97-260-97q-7-3-14.5-4.5T190-660q-48 0-69 33t-21 82q0 52 16 101.5t54 87.5q29 28 65.5 42t76.5 14Zm49-80q37 0 58-16.5t21-45.5q0-49-64.5-93.5T239-580q-37 0-58 16.5T160-518q0 49 64.5 93.5T361-380Zm-6-55q-39 0-86-27.5T214-519q8-3 15-5t15-2q39 0 86.5 28t55.5 57q-8 3-15.5 4.5T355-435Zm244 56q72 0 136.5-45t64.5-94q0-29-20.5-46T721-581q-72 0-136.5 45T520-442q0 29 21 46t58 17Zm5-56q-8 0-14.5-1.5T575-441q9-29 55-56.5t86-27.5q8 0 15 1.5t15 4.5q-9 29-55.5 56.5T604-435Zm-124-45Z"/></svg>
            <Select className={styles.input}>
              <Option value="user" children="User"/>
              <Option value="admin" children="Admin"/>
            </Select>
          </div>
          <div className={styles.internalDivs}>
            <Button className={styles.button} type="submit" children="Sign Up" />
          </div>
        </form>
      </div>
    </>
  )
}

export { SignUp };