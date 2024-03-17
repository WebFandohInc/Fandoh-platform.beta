import Image from 'next/image'

import aboutUsImage from '../../../public/images/about-us-image.png'

export default function AboutUs() {
  return (
    <article className="mx-auto my-0 max-w-[1180px] pb-10 pt-32 text-left text-muted-foreground">
      <div className="m-4 space-y-6 lg:w-[600px]">
        <h1 className="text-7xl font-extrabold tracking-tight">About us</h1>

        <div className="relative h-[200px] lg:h-[300px]">
          <Image src={aboutUsImage} alt="About us image" fill />
        </div>

        <p className="text-muted-foreground">
          At WebFandoh, our mission is to foster creativity, diversity, and
          community engagement in the digital sphere. We aim to be a catalyst
          for positive change in how content is created, shared, and experienced
          online.
        </p>

        <h2 className="text-3xl font-extrabold">Ease of use</h2>
        <p>
          Creating and sharing lists has never been easier. With an intuitive
          and user-friendly interface, you can focus on developing incredible
          content without worrying about the technology behind it.
        </p>

        <h2 className="text-3xl font-extrabold">Diverse Content</h2>
        <p>
          {`
            We celebrate a wide range of interests and passions. Whether you're
            into anime, news, or gaming, WebFandoh is your space to create and
            share amazing lists.`}
        </p>

        <h2 className="text-3xl font-extrabold">Inspiration</h2>
        <p>
          We aim to inspire creators worldwide to unleash their creativity and
          share their passions with the world. By providing a platform where
          individuals can express themselves freely through curated lists, we
          empower them to explore new ideas, perspectives, and interests.
        </p>
      </div>
    </article>
  )
}
