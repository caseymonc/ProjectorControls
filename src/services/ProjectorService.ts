import { GetConfigWithType, PostConfigWithType } from "./Service"

const actionCommands = {
  PowerOn: '',
  PowerOff: '',

  ResetAllSettings: '',
  ResetColorSettings: '',

  SplashScreenBlack: '',
  SplashScreenBlue: '',
  SplashScreenViewSonic: '',
  SplashScreenScreenCapture: '',
  SplashScreenOff: '',

  QuickPowerOffOn: '',
  QuickPowerOffOff: '',

  HighAltitudeModeOn: '',
  HighAltitudeModeOff: '',

  LampModeNormal: '',
  LampModeEco: '',
  LampModeDynamic: '',
  LampModeSleep: '',

  ProjectorPositionTableFront: '',
  ProjectorPositionTableBack: '',
  ProjectorPositionCeilingFont: '',
  ProjectorPositionCeilingBack: '',

  ContrastDecrease: '',
  ContrastIncrease: '',

  BrightnessDecrease: '',
  BrightnessIncrease: '',

  AspectRatioAuto: '',
  AspectRatio4x3: '',
  AspectRatio16x9: '',
  AspectRatio16x10: '',
  AspectRatioAnamorphic: '',
  AspectRatioWide: '',
  AspectRatio235x1: '',
  AspectRatioPanorama: '',

  HorizontalPositionLeft: '',
  HorizontalPositionRight: '',

  VerticalPositionUp: '',
  VerticalPositionDown: '',

  ColorTemperatureWarm: '',
  ColorTemperatureNormal: '',
  ColorTemperatureNeutral: '',
  ColorTemperatureCool: '',

  BlankOn: '',
  BlankOff: '',

  KeystoneVerticalIncrease: '',
  KeystoneVerticalDecrease: '',

  KeystoneHorizontalIncrease: '',
  KeystoneHorizontalDecrease: '',

  ColorModeBrightest: '',
  ColorModeMovie: '',
  ColorModeStandard: '',
  ColorModeViewMatch: '',
  ColorModeDynamic: '',

  HueDecrease: '',
  HueIncrease: '',

  SaturationDecrease: '',
  SaturationIncrease: '',

  GainDecrease: '',
  GainIncrease: '',

  FreezeOn: '',
  FreezeOff: '',

  InputVGA1: '',
  InputVGA2: '',
  InputHDMI: '',
  InputComposite: '',
  InputSVideo: '',

  QuickAutoSearchOn: '',
  QuickAutoSearchOff: '',

  MuteOn: '',
  MuteOff: '',

  VolumeUp: '',
  VolumeDown: ''
} as const
type ActionCommand = keyof typeof actionCommands;

export const queryCommands = {
  Power: '',
  SplashScreen: '',
  QuickPowerOff: '',
  HighAltitudeMode: '',
  LampMode: '',
  ProjectorPosition: '',
  Contrast: '',
  Brightness: '',
  AspectRatio: '',
  HorizontalPosition: '',
  VerticalPosition: '',
  ColorTemperature: '',
  Blank: '',
  KeystoneVertical: '',
  KeystoneHorizontal: '',
  ColorMode: '',
  Hue: '',
  Saturation: '',
  Gain: '',
  Freeze: '',
  Input: '',
  QuickAutoSearch: '',
  Mute: '',
  Volume: ''
} as const;

type QueryCommand = keyof typeof queryCommands;

export const doAction = (command: ActionCommand): PostConfigWithType<unknown, string> => ({
  url: `/projector/${command}`,
  method: 'POST'
});

export const toggleAction = (command: QueryCommand): PostConfigWithType<unknown, string> => ({
  url: `/projector/${command}/toggle`,
  method: 'POST'
});

export const query = (command: QueryCommand): GetConfigWithType<{value: number}> => ({
  url: `/projector/${command}`,
  queryKey: [command]
});