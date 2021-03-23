import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';





const main_f =[
  {
    title: 'Jaqpot services',
    imageUrl: 'img/jaqpot.svg',
    description: (
      <>
        <h3>Jaqpot Services allows you to deploy machine learning models incredibly easy.</h3>
        
        <b>Deploy your models using jaqpot and integrate them with your applications</b>
        <br></br>
        Respect <b>data privacy</b> by excanching only the result of your experiments
        <br></br>
        Accelerate your transformation with smart applications and guided decision making
        <br></br>
        Make your models <b>transparent</b> and easily accessible from a user interface that anyone can use
       </>
    ),
  }
]


const features = [
  {
    title: 'Train',
    imageUrl: 'img/notes.svg',
    description: (
      <>
        Train your models however you feel free.
        Choose and use whaterver library and environment you feel comfortable with.
        Pyhton's <b> Sklearn</b> and <b> R</b> are allready supported and soon ML.NET
      </>
    ),
  },

  {
    title: 'Deploy',
    imageUrl: 'img/rocket.svg',
    description: (
      <>
        Whatever your selection jaqpot libraries have been developed with respect to the language standards and tools keeping 
        the modeler feeling allready comfortable. Your models to beb services with API's with a single command!
      </>
    ),
  },
  {
    title: 'Share',
    imageUrl: 'img/employee.svg',
    description: (
      <>
        Model sharing has never been easier. 
        Create your teams and organizations and share your models.
        Hold your models on your space and share whatever you like with your teams and give access to whoever you want.
      </>
    ),
  },

  {
    title: 'Integrate',
    imageUrl: 'img/brain.svg',
    description: (
      <>
        SDK's are available to all the established programming languages. 
        Integrate your microservices and applications developed with Golang, .NET, JAVA, Python and your web applications with Javascript / Typecript
      </>
    ),
  },

];


const ui_f =[
  {
    title: 'User interfaces',
    imageUrl: 'img/layers.svg',
    description: (
      <>
        <h3>User interface for your models</h3>
        <b>Deploy your models and make them transparent with the Jaqpot user interface</b>
        <br></br>
        Let everyone interact with your models. Every user have the ability to use the model, create predictions with datasets or simple data input and validate the predictions.
       </>
    ),
  },
  {
    title: 'API',
    imageUrl: 'img/api.svg',
    description: (
      <>
        <h3>API's for your models</h3>
        
        <b>Model Integration made easy</b>
        <br></br>
        Every model get's it's uri through jaqpot's API. Model integration can be done within minutes through the API and use it however you wish. 
        No need to implement a specific servcies for your models. Become free of the integration, development and management costs through jaqpot API. 
       </>
    ),
  }
]




function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    // <div className={clsx('col col--6', styles.feature)}>
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function MainFeature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    // <div className={clsx('col col--6', styles.feature)}>
    <div className={clsx('col col--12',  styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


function UiFeature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    // <div className={clsx('col col--6', styles.feature)}>
    <div className={clsx('col col--6',  styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  siteConfig.title = "Jaqpot"
  siteConfig.tagline = "Train. Deploy. Share."
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
          {main_f && main_f.length > 0 && (
          <section className={styles.featured}>
            <div className="container">
              <div className="row">
                {main_f.map((props, idx) => (
                  <MainFeature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">User interfaces & API</h1>
          <p className="hero__subtitle">Transparency for you models</p>

          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div> */}

          {ui_f && ui_f.length > 0 && (
          <section className={styles.featured}>
            <div className="container">
              <div className="row">
                {ui_f.map((props, idx) => (
                  <UiFeature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        </div>
      </header>
    </Layout>
  );
}

export default Home;
