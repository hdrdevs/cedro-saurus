import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Based on widgets',
    Svg: require('@site/static/img/modular.svg').default,
    description: (
      <>
        Create simple or complex user interfaces by selecting from a wide range of available widgets, customizing existing ones, or creating new ones, according to your needs.
      </>
    ),
  },
  {
    title: 'Ease of Use',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        Cedro utilizes components called widgets, offering an intuitive API and clear documentation that allows developers to quickly create complex interfaces.
      </>
    ),
  },
  {
    title: 'Based on TypeScript',
    Svg: require('@site/static/img/secure.svg').default,
    description: (
      <>
       Cedro is entirely based on TypeScript, ensuring safer and more efficient development, with full support for static types, code autocompletion, and refactoring.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
