import './preferens.css'

const items = [
    {
        id: 1,
        title: 'Команда профессионалов',
        description: 'Работаем с 2010 года, все мастера имеют соответствующую аттестацию.',
    },
    {
        id: 2,
        title: 'Честная смета',
        description: 'После первичной консультации озвучиваем стоимость наших услуг.',
    },
    {
        id: 3,
        title: 'Договор и гарантии',
        description: 'Заключаем договор, даём 3 года гарантии на свои работы.',
    },
    {
        id: 4,
        title: 'Оплата по факту',
        description: 'Наличная и безналичная формы оплаты после завершения всех работ.',
    }
]

export const Preferens = () => {
  return (
      <div className="preferens">
          {items.map((item, index) => (
              <div className="preferens-item" key={index}>
                  <div className="count">0{item.id}</div>
                  <div className="item__content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                  </div>
              </div>
          ))}
      </div>
  )
}