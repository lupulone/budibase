import { publishEvent } from "../events"
import {
  Event,
  LoginEvent,
  LoginSource,
  LogoutEvent,
  SSOActivatedEvent,
  SSOCreatedEvent,
  SSODeactivatedEvent,
  SSOType,
  SSOUpdatedEvent,
} from "@budibase/types"

export function login(source: LoginSource) {
  const properties: LoginEvent = {
    source,
  }
  publishEvent(Event.AUTH_LOGIN, properties)
}

export function logout() {
  const properties: LogoutEvent = {}
  publishEvent(Event.AUTH_LOGOUT, properties)
}

export function SSOCreated(type: SSOType) {
  const properties: SSOCreatedEvent = {
    type,
  }
  publishEvent(Event.AUTH_SSO_CREATED, properties)
}

export function SSOUpdated(type: SSOType) {
  const properties: SSOUpdatedEvent = {
    type,
  }
  publishEvent(Event.AUTH_SSO_UPDATED, properties)
}

export function SSOActivated(type: SSOType) {
  const properties: SSOActivatedEvent = {
    type,
  }
  publishEvent(Event.AUTH_SSO_ACTIVATED, properties)
}

export function SSODeactivated(type: SSOType) {
  const properties: SSODeactivatedEvent = {
    type,
  }
  publishEvent(Event.AUTH_SSO_DEACTIVATED, properties)
}