import { defaultTheme } from 'src/styles/theme/default'
import { ColorsGridContainer, ColorsGridContent } from './styles'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  return Object.entries(defaultTheme).map(([key, color]) => {
    return (
      <ColorsGridContainer variant={color} key={key}>
        <ColorsGridContent
          variant={getContrast(color, '#fff') < 3.5 ? '#000' : '#fff'}
        >
          <strong>{key}</strong>
          <span>{color}</span>
        </ColorsGridContent>
      </ColorsGridContainer>
    )
  })
}
