import React from 'react';
import theme from '../theme/theme'
import { withStyles } from '@material-ui/styles';
import ButlerLoading from '../assets/walking_start_resized.gif'
import ButlerWaiting from '../assets/walking_stop_resized.jpg'
import ButlerSuccess from '../assets/walking_end_nofood.gif'
import ButlerLoaded from '../assets/food_reveal.gif'

const styles = () => ({
  butlerContainer: {
    width: '100%',
    position: 'relative',
    height: 150,
    marginTop: theme.spacing(2)
  },
  butlerLoading: {
    height: 150,
    width: 150,
    position: 'absolute',
    top: 0,
    left: 0
  }
})

class ButlerLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 50,
            // success: false,
            showFood: false
        }
        this.floatBackValue = 0
    }

    componentDidMount(){
        // start animation
        setInterval(() => {
            const offset = this.state.offset
            const success = this.props.success

            if (!success && offset < 100) {
                const newOffset = offset + 0.4
                this.setState({ offset: newOffset })
            } else if (success && offset > 50) {
                if (!this.floatBackValue) {
                  this.floatBackValue = (offset - 50) / 6
                }
                const newOffset = offset - this.floatBackValue
                this.setState({ offset: newOffset })
            }
        }, 200)

        // setTimeout(() => {
        //     this.setState({ success: true })
        //     setTimeout(() => {
        //         this.setState({
        //             showFood: true
        //         })
        //     }, 1000)
        // }, 10000)
    }

    componentDidUpdate(prevProps, prevState){
        if (!prevProps.success && this.props.success) {
            // this.setState({ success: true })

            // setTimeout(() => {
            //     this.setState({
            //         showFood: true
            //     })
            // }, 1000)
        }
    }

    render() {
        const { classes, success, showFood } = this.props
        const offset = this.state.offset
        // const showFood = this.state.showFood

        let src = ''
        if (success) {
            src = showFood ? ButlerLoaded : ButlerSuccess
        } else {
            src = offset < 90 ? ButlerLoading : ButlerWaiting
        }

        return <div className={classes.butlerContainer}>
            <img style={{
                left: 'calc(' + offset + '% - 75px',
                // transition: success ? 'all 1.5s ease-in-out' : 'all 0.2s ease-in-out'
              }}
              className={classes.butlerLoading}
              src={src} />
        </div>
    }
}

export default withStyles(styles)(ButlerLoader);
