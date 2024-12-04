"use client"

import clsx from "clsx"
import React, { useState } from "react"
const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="envlope-wrapper"
        onClick={(e) => {
          e.preventDefault()
          setIsOpen((c) => !c)
        }}
      >
        <div
          id="envelope"
          className={clsx({
            open: isOpen,
            close: !isOpen,
          })}
        >
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            <div className="italic p-4 font-bold bg-gradient-to-r from-orange-600 to-red-600 inline-block text-transparent bg-clip-text">
              <p>To My Love,</p>
              <p>
                &nbsp;&nbsp;Although we can't celebrate the first of our
                thousand years, I would really want to let you know you mean so
                much to me.
              </p>
              <p className="text-right">Our love wins all YoYo Des :3</p>
            </div>
          </div>
          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Envelope
