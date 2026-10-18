import Image from "next/image";

export default async function GalleryPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="mt-20 w-full flex flex-col gap-3">
        <h1 className="text-2xl md:text-4xl font-bold text-center">This page is not ready yet.</h1>
        <h3 className="text-md md:text-xl text-center">It will be soon, but when I don&#39;t know.</h3>
      </div>
      <div className="max-w-50 md:max-w-70 mx-auto flex flex-col gap-2">
        <Image
          src="/IMG_9270.JPG"
          width={1272}
          height={1079}
          alt=""
        />
        <p className="text-md text-center">The first image here.</p>
      </div>
    </div>
  )
}