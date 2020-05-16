import styled from 'styled-components'
import { ReactComponent as Spinner } from './Spinner.svg'

const StyledSpinner = styled(Spinner)`
position: absolute;
top: calc(50% - 100px);
left: calc(50% - 100px);
`
export default StyledSpinner
