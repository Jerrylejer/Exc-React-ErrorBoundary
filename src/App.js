import React, { Component } from 'react';
import Frieza from './Components/Frieza/Frieza';
import Goku from './Components/Goku/Goku';
import Vegeta from './Components/Vegeta/Vegeta';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

class App extends Component {
    render() {
        return (
            <div className='container text-center'>
                <h1>Cliquez pour ajouter dans votre panier</h1>
                <br />
                <div className='row'>
                    {/* On enrobe chaque élément avec le component ErrorBoundary afin que la remontée d'erreur n'affecte
                    que l'élément touché => Stock insuffisant par exemeple */}
                    <ErrorBoundary>
                        <Vegeta />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Goku />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Frieza />
                    </ErrorBoundary>
                </div>
            </div>
        );
    }
}
export default App;
