# capacitor-plugin-ambientlight

get ambient light sensor data of smartphone

## Install

```bash
npm install capacitor-plugin-ambientlight
npx cap sync
```

## API

<docgen-index>

* [`init(...)`](#init)
* [`registerListener()`](#registerlistener)
* [`unregisterListener()`](#unregisterlistener)
* [`getInfo()`](#getinfo)
* [`isAvailable()`](#isavailable)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init(...)

```typescript
init(option?: { SensorDelay: SensorManager; } | undefined) => any
```

Initialize of the light sensor with settings

| Param        | Type                                                                      | Description     |
| ------------ | ------------------------------------------------------------------------- | --------------- |
| **`option`** | <code>{ SensorDelay: <a href="#sensormanager">SensorManager</a>; }</code> | of light sensor |

**Returns:** <code>any</code>

--------------------


### registerListener()

```typescript
registerListener() => any
```

Register onLightSensorChanged listener

**Returns:** <code>any</code>

--------------------


### unregisterListener()

```typescript
unregisterListener() => any
```

Unregister onLightSensorChanged listener

**Returns:** <code>any</code>

--------------------


### getInfo()

```typescript
getInfo() => any
```

Get light sensor information

**Returns:** <code>any</code>

--------------------


### isAvailable()

```typescript
isAvailable() => any
```

Check is light sensor available

**Returns:** <code>any</code>

--------------------


### Enums


#### SensorManager

| Members                    | Value          |
| -------------------------- | -------------- |
| **`SENSOR_DELAY_FASTEST`** | <code>0</code> |
| **`SENSOR_DELAY_GAME`**    | <code>1</code> |
| **`SENSOR_DELAY_UI`**      | <code>2</code> |
| **`SENSOR_DELAY_NORMAL`**  | <code>3</code> |

</docgen-api>
