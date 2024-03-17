import Image from 'next/image'
import Link from 'next/link'

import facebookLogo from '../../public/facebook-icon.svg'
import webfandohLogo from '../../public/images/webfandoh-logo.png'
import instagramLogo from '../../public/instagram-icon.svg'
import pinterestLogo from '../../public/pinterest-icon.svg'
import twitterLogo from '../../public/twitter-icon.svg'
import { Separator } from './ui/separator'

export function Footer() {
  return (
    <div className="relative w-full">
      <Separator />
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-12 px-2 py-12 lg:gap-40 xl:grid-cols-5 2xl:px-0">
        <div className="col-span-2 flex flex-col items-center gap-8 text-center lg:items-start xl:text-left">
          <Image
            src={webfandohLogo}
            width={250}
            height={50}
            alt="WebFandoh logo"
          />

          <p className="font-medium">
            Webfandoh is a social networking platform for creating and sharing
            creative content.
          </p>
        </div>

        <div className="flex flex-col gap-1 text-center xl:text-left">
          <h2 className="font-bold">Community</h2>
          <Link
            className="font-medium transition-all hover:text-zinc-900/80"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            className="font-medium transition-all hover:text-zinc-900/80"
            href="/terms-of-use"
          >
            Terms of Use
          </Link>
          <Link
            className="font-medium transition-all hover:text-zinc-900/80"
            href="/about-us"
          >
            About us
          </Link>
          <Link
            className="font-medium transition-all hover:text-zinc-900/80"
            href="/"
          >
            Contact
          </Link>
          <Link
            className=" font-medium transition-all hover:text-zinc-900/80 "
            href="/"
          >
            Marketing
          </Link>
        </div>

        <div className="flex flex-col gap-1 text-center xl:text-left">
          <h2 className="font-bold">Publicity</h2>
          <Link
            className="font-medium transition-all hover:text-zinc-900/80"
            href=""
          >
            Marketing
          </Link>
          <Link
            className="font-medium transition-all hover:text-zinc-900/80"
            href=""
          >
            Media Kit
          </Link>
        </div>

        <div className="col-span-2 flex flex-col gap-1 xl:col-span-1">
          <h2 className="text-center font-bold xl:text-left">
            Our social networks
          </h2>
          <div className=" flex items-center justify-center gap-2">
            <Link
              className="font-medium transition-all hover:text-zinc-900/80"
              href=""
            >
              <Image
                src={facebookLogo}
                alt="Facebook"
                width={35}
                className="transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110"
              />
            </Link>
            <Link
              className="font-medium transition-all hover:text-zinc-900/80"
              href=""
            >
              <Image
                src={twitterLogo}
                alt="Facebook"
                width={35}
                className="transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110"
              />
            </Link>
            <Link
              className="font-medium transition-all hover:text-zinc-900/80"
              href=""
            >
              <Image
                src={instagramLogo}
                alt="Facebook"
                width={35}
                className="transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110"
              />
            </Link>
            <Link
              className="font-medium transition-all hover:text-zinc-900/80"
              href=""
            >
              <Image
                src={pinterestLogo}
                alt="Facebook"
                width={35}
                className="transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full bg-zinc-50 px-2 py-4 text-center font-semibold md:px-0">
        <span>Copyright © WebFandoh 2024 - All Rights Reserved</span>
      </div>
    </div>
  )
}
