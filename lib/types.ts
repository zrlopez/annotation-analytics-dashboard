export interface KPIs {
  totalThroughput: number
  throughputChange: string
  errorRate: number
  errorRateChange: string
  teamEfficiency: number
  teamEfficiencyChange: string
  capacityUtilization: number
  capacityUtilizationChange: string
}

export interface HourlyPoint { time: string; value: number }
export interface DateValuePoint { date: string; value: number }
export interface ProcessPoint { process: string; value: number; percentage: number }

export interface ErrorClassification { type: string; count: number; percentage: number }
export interface ErrorSeverity { level: string; count: number; percentage: number }
export interface ResolutionByType { type: string; time: number }
export interface ErrorResolution { average: number; target: number; byType: ResolutionByType[] }

export interface TeamMember {
  name: string
  avatar: string
  productivity: number
  tasksCompleted: number
  avgTaskTime: number
}
export interface UtilizationRow {
  member: string
  mon: number; tue: number; wed: number; thu: number; fri: number
}

export interface ForecastPoint { date: string; predicted: number; actual: number | null; confidence: number }
export interface HistoricalPoint { date: string; predicted: number; actual: number }
export interface Bottleneck { resource: string; utilization: number; severity: 'high' | 'medium' | 'low' }
export interface Recommendation { type: string; resource: string; priority: 'high' | 'medium' | 'low'; impact: string }

export interface Alert {
  id: number
  message: string
  priority: 'high' | 'medium' | 'low'
  timestamp: string
  status: 'active' | 'acknowledged'
}
export interface AlertHistoryPoint { date: string; total: number; resolved: number; pending: number }
export interface Threshold { metric: string; threshold: number; current: number; status: 'ok' | 'warning' | 'critical' }

export interface AppData {
  kpis: KPIs
  throughputData: {
    hourly: HourlyPoint[]
    daily: DateValuePoint[]
    byProcess: ProcessPoint[]
  }
  errorData: {
    classification: ErrorClassification[]
    severity: ErrorSeverity[]
    trends: DateValuePoint[]
    resolutionTime: ErrorResolution
  }
  teamData: {
    members: TeamMember[]
    productivity: DateValuePoint[]
    utilization: UtilizationRow[]
  }
  capacityData: {
    forecast: ForecastPoint[]
    historical: HistoricalPoint[]
    bottlenecks: Bottleneck[]
    recommendations: Recommendation[]
  }
  alertsData: {
    active: Alert[]
    history: AlertHistoryPoint[]
    thresholds: Threshold[]
  }
}
