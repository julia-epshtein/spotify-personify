'use client';
import React,  { use, useEffect, useState } from 'react'
import Link from 'next/link'
import Intro from './intro'
import Topsongs from './topsongs'

export default function StatsPage() {

  return (
    <div className='flex flex-col snap-mandatory'>
      <Intro />
      <Topsongs/>
    </div>

  )
}