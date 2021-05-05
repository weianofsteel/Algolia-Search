import React from 'react'
import { withTranslation } from '../i18n'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import Algolia from '../component/Algolia/Algolia'

const HomePage = ({ t }) =>{
    return (
        <React.Fragment>

            <NextSeo
                title="Weian Wang | Front-end developer"
                description="I am a front-end developer, open to opportunities."
                openGraph={{
                    url: 'https://weianofsteel.com',
                    title: 'Weian Wang | Front-end developer',
                    description: 'I am a front-end developer, open to opportunities.',
                    images: [
                      {
                        url: 'https://raw.githubusercontent.com/weianofsteel/saliejung/master/public/openGraph.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Weian Wang | Front-end developer',
                      }
                    ],
                    site_name: 'Weian Wang | Front-end developer',
                  }}
            />

          <Algolia/>

        </React.Fragment>
    )

}

HomePage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner', 'footer', 'skill', 'learnByDoing', 'sharing'],
})
  
HomePage.propTypes = {
  t: PropTypes.func.isRequired,
}
  
export default withTranslation('header')(HomePage) 