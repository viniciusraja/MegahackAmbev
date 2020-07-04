import {
  FETCH_GOALS_PENDING,
  FETCH_GOALS_ERROR,
  FETCH_GOALS_SUCCESS,
} from 'store/ducks/actions/types';
const initialState = {
  pending: false,
  error: null,
  goals: [],
 
  headerAdvertisement:[
    {
    title:"#OrgulhoNãoPara",
    link:"https://exame.com/marketing/ambev-faz-arco-iris-de-caminhoes-e-pede-sua-ajuda-na-acao-orgulhonaopara/",
    uri:"https://res.cloudinary.com/fernandes-landim/image/upload/c_scale,q_35,w_500/v1593844459/MegaHack/02_fiw1os.jpg"
  },
  {
    title:"Sustentabilidade",
    link:"https://www.ambev.com.br/sustentabilidade/residuo-zero-e-clima/",
    uri:"https://res.cloudinary.com/fernandes-landim/image/upload/c_scale,q_35,w_500/v1593845118/MegaHack/ar-01_ctbegi.jpg"
  },
  {
    title:"Juntos à distância",
    link:"https://www.ambev.com.br/juntosadistancia",
    uri:"https://res.cloudinary.com/fernandes-landim/image/upload/c_scale,q_45,w_500/v1593846468/MegaHack/WhatsApp-Image-2020-03-17-at-19.04.45_dkcgzh.jpg"
  },
  {
    title:"Consumo Responsável",
    link:"https://www.ambev.com.br/CONSUMO-RESPONSAVEL",
    uri:"https://res.cloudinary.com/fernandes-landim/image/upload/c_scale,w_500/v1593846583/MegaHack/campanha_2-8706008_es50cm.jpg"
  },
  {
    title:"Recompensas da Semana",
    link:"https://www.ambev.com.br/",
    uri:"https://res.cloudinary.com/fernandes-landim/image/upload/v1593845536/MegaHack/grande_caixa-termica-15-litros-corona-ambev-azul-branco-metal-galvanizado-1002009-9de8a63f_svhuxj.jpg"
  },
]
};

const getGoals = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOALS_SUCCESS:
      return {
        ...state,
        pending: false,
        goals: [...action.payload],
      };
    case FETCH_GOALS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_GOALS_ERROR:
      return {
        ...state,

        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getGoals;
