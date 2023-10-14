import ResponsiveMenu from "../components/menu"


export const metadata = {
  title: 'Instituto Rose Reis',
  description: 'Generated by create next app',
}

export default function Layout({ children }) {
  return (
        <div >
          <ResponsiveMenu />
          {children}
        </div>
  )
}