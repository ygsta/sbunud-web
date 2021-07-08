
export default function banners(req, res) {
  res.status(200).json([
      {src: "/images/home/slider/slider1.png", title: ""},
      {src: "/images/home/slider/slider2.jpg", title: ""},
      {src: "/images/home/slider/slider3.jpg", title: ""},
      {src: "/images/home/slider/slider4.jpg", title: ""},
      {src: "/images/home/slider/slider5.jpg", title: ""},
      {src: "/images/home/slider/slider6.jpg", title: ""}
    ]
  )
}
