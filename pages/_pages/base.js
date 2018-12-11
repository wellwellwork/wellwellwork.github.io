import Header from '../../partials/Header'
import Footer from '../../partials/Footer'

import Page from '../../partials/Page'

export default ( { children } ) => (<>
    <Header></Header>
    <Page>{ children }</Page>
    <Footer></Footer>
</>)