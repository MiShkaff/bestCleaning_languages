// import Link from "next/link";
// import { useRouter } from "next/router";

// const Page = ({content}) => {
//   return (
//     <div>
//       <h2>{content.title}</h2>
//     </div>
//   );
// };

// export const getServerSideProps = async(context) => {
//   const {id} = context.params
//   const {locale} = context 
//   let translation = undefined
//   const initialRes = await fetch(`http://localhost:1337/api/header-lists/${id}`)
//   const initial = await initialRes.json()

//   if(locale === "ru") {
//     const translationRes = await fetch(
//       `http://localhost:1337/api/header-lists/${initial.localizations[0].id}`
//     )
//     translation = await translationRes.json()
//   }

//   return {
//     props: {
//       content: translation ? translation: initial
//     }
//   }
// }

// export default Page;


























// // import React from 'react'
// // import Link from 'next/link'
// // import { useRouter } from 'next/router'

// // const Page = ({content}) => {
// // //   const router = useRouter();
// //   return (
// //     <div>
// //       <h2>{content.LinkName}</h2>
// //         {/* <Link href={router.asPath} locale={router.locale === 'en-US' ? 'ru': 'en-US'}> */}
// //             <a>
// //                {
// //                 // router.locale === 'en-US' ? "russkiy perevod": "show english translation"
// //                } 
// //             </a>
// //         {/* </Link>  */}
// //     </div>
// //   )
// // }

// // export const getServerSideProps = async (context) => {
// //     const {id} = context.params
// //     const {locale} = context

// //     let translation = undefined

// //     const initialRes = await fetch(`http://localhost:1337/api/header-lists/${id}`)
// //     const initial = await initialRes.json()

// //     if (locale === 'ru') {
// //         const translationRes = await fetch(
// //             `http://localhost:1337/api/header-lists/${initial.localizations[0].id}`
// //         )
// //         translation = await translationRes.json()
// //     }

// //     return {
// //         props:{
// //             content:translation ? translation: initial
// //         }
// //     }
// // }

// // export default Page
