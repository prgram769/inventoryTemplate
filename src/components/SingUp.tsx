"use client"

import { Input } from "@/components/ui/Input";
import { ubuntu } from "@/components/fonts";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";

function SignUp() {

  const styles = {
    divContainer: `${ubuntu.className} bg-amber-100 w-[95vw] h-[60vh] md:w-130 md:h-120 flex flex-col justify-center items-center rounded-3xl border-4 border-red-300 relative`,
    title: "text-2xl md:text-3xl font-bold m-3 text-center",
    span: "flex justify-center font-bold",
    internalDivs: "flex justify-center items-center mr-2 ml-2 md:m-0",
    input: "w-full border-2 border px-3 py-3 m-2 rounded-2xl required",
    button: "rounded-2xl border-2 bg-orange-300 w-full m-2 px-2 py-2 font-bold"
  }

  return (
    <div>
      <h1 className={styles.title}>Inventory Login</h1>
      <div className={styles.divContainer}>
        <p className="w-w"></p>
        <form>
          <span className={styles.span}>
            <Label htmlFor="nameInput" children="Name"/>
          </span>
          <div className={styles.internalDivs}>
            <svg xmlns="http://www.w3.org/2000/svg" height="59px" viewBox="0 -960 960 960" width="48px" fill="#222"><path d="M480-242q-67 0-129 23.5T235-149v9h490v-9q-54-46-116-69.5T480-242Zm139.5-35.5Q685-253 740-211v-609H220v609q55-42 120.5-66.5T480-302q74 0 139.5 24.5ZM427-464q-23-23-23-55t23-55q23-23 55-23t55 23q23 23 23 55t-23 55q-23 23-55 23t-55-23ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm360-341q40-40 40-98t-40-98q-40-40-98-40t-98 40q-40 40-40 98t40 98q40 40 98 40t98-40Zm-100-98Z"/></svg>
            <Input id="nameInput" type="text" className={styles.input} placeholder="Insert your name"/>
          </div>
          <span className={styles.span}>
            <Label htmlFor="usernameInput" children="Username" />
          </span>
          <div className={styles.internalDivs}>
            <svg xmlns="http://www.w3.org/2000/svg" height="59px" viewBox="0 -960 960 960" width="48px" fill="#222"><path d="M372-523q-42-42-42-108t42-108q42-42 108-42t108 42q42 42 42 108t-42 108q-42 42-108 42t-108-42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm324.5-346.5Q570-592 570-631t-25.5-64.5Q519-721 480-721t-64.5 25.5Q390-670 390-631t25.5 64.5Q441-541 480-541t64.5-25.5ZM480-631Zm0 411Z" /></svg>
            <Input id="usernameInput" type="text" className={styles.input} placeholder="Insert a username:" />
          </div>
          <span className={styles.span}>
            <Label htmlFor="passwordInput" children="Password" />
          </span>
          <div className={styles.internalDivs}>
            <svg xmlns="http://www.w3.org/2000/svg" height="59px" viewBox="0 -960 960 960" width="48px" fill="#222"><path d="M80-200v-61h800v61H80Zm38-254-40-22 40-68H40v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 22-38-67-38 67Zm324 0-40-24 40-68h-78v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 24-38-67-38 67Zm324 0-40-24 40-68h-78v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 24-38-67-38 67Z" /></svg>
            <Input id="passwordInput" type="password" className={styles.input} placeholder="Insert a password:" />
          </div>
          <div className={styles.internalDivs}>
            <Button className={styles.button} type="button" children="Sign Up"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export { SignUp };