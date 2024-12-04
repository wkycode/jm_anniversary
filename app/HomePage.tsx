"use client"

import NextLink from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@nextui-org/button"
import Envelope from "@/components/Envelope"

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  return (
    <main className="flex min-h-full flex-col justify-center">
      <Envelope />
      <Button
        size="lg"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        onClick={(e) => {
          e.preventDefault()
        }}
      >
        <NextLink
          className="font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 inline-block text-white bg-clip-text"
          href="/year_2024"
        >
          Our 2024
        </NextLink>
      </Button>
    </main>
  )
}
