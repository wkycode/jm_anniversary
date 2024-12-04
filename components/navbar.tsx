"use client"

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenuItem,
} from "@nextui-org/navbar"
import NextLink from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import CustomContainer from "./CustomContainer"
import { useRouter } from "next/navigation"
import { getAuth, signOut } from "firebase/auth"
import { app } from "../firebase"
import { Button } from "@nextui-org/button"
import { useContext, useState } from "react"
import { AuthContext } from "@/context/AuthContext"

const Navbar = () => {
  const { user } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  async function handleLogout() {
    await signOut(getAuth(app))
    await fetch("/api/logout")
    router.push("/login")
  }
  console.log(user)

  return (
    <NextUINavbar
      // disableAnimation
      className="shadow-md bg-sky-50"
      maxWidth="lg"
      position="static"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="dora"
              height={36}
              src="/images/icons/dora.png"
              width={36}
            />
            <Image
              alt="heart"
              className="ml-1"
              height={24}
              src="/images/icons/heart.png"
              width={24}
            />
            <Image
              alt="squirtle"
              height={44}
              src="/images/icons/s_icon.png"
              width={44}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle className="text-gray-500" />
      </NavbarContent>

      <NavbarMenu className="p-0 py-3 bg-sky-50 ">
        <CustomContainer>
          <div className="flex flex-col items-end justify-end">
            {siteConfig.navItems.map((ele, index) => (
              <NavbarMenuItem key={`${ele}-${index}`}>
                <NextLink
                  className="font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 inline-block text-transparent bg-clip-text"
                  href={ele.href}
                >
                  {ele.label}
                </NextLink>
              </NavbarMenuItem>
            ))}
            {user && (
              <div className="py-1">
                <Button
                  size="sm"
                  radius="full"
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                  onClick={(e) => {
                    e.preventDefault()
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </CustomContainer>
      </NavbarMenu>
    </NextUINavbar>
  )
}

export default Navbar
